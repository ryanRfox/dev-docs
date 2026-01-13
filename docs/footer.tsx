export default function Footer() {
  return (
    <div style={{
      padding: '2rem',
      textAlign: 'center',
      borderTop: '1px solid var(--vocs-color_border)'
    }}>
      <div style={{ marginBottom: '0.5rem' }}>
        <a href="https://radiustech.xyz" style={{ marginRight: '1rem' }}>Website</a>
        <a href="https://github.com/radiustechsystems" style={{ marginRight: '1rem' }}>GitHub</a>
        <a href="https://discord.gg/radiustech" style={{ marginRight: '1rem' }}>Discord</a>
        <a href="https://x.com/radiustech_xyz">Twitter</a>
      </div>
      <div style={{ fontSize: '0.875rem', color: 'var(--vocs-color_text2)' }}>
        ©{new Date().getFullYear()} Radius. All Rights Reserved.
      </div>
    </div>
  )
}
