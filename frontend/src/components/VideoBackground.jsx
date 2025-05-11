export default function VideoBackground() {
  return (
    <div className="video-container">
      <video autoPlay loop muted>
        <source src="/videos/background.mp4" type="video/mp4" />
      </video>
    </div>
  );
}