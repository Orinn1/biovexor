export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code') || '6MTUP78KF6';

  try {
    const res = await fetch(`https://discord.com/api/v10/invites/${code}?with_counts=true`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      return Response.json({ success: false, error: `Discord API returned ${res.status}` }, { status: res.status });
    }

    const data = await res.json();
    const guild = data.guild || {};
    const iconHash = guild.icon;
    const isAnimated = iconHash && iconHash.startsWith('a_');
    const iconUrl = iconHash
      ? `https://cdn.discordapp.com/icons/${guild.id}/${iconHash}.${isAnimated ? 'gif' : 'png'}?size=128`
      : null;

    return Response.json({
      success: true,
      guildId: guild.id,
      name: guild.name || 'Discord Community',
      icon: iconUrl,
      onlineCount: data.approximate_presence_count ?? 0,
      memberCount: data.approximate_member_count ?? 0,
    });
  } catch (err) {
    return Response.json({ success: false, error: err.message }, { status: 500 });
  }
}
