export default function DashBoardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[250px_1fr]">
      <div>Side panel</div>
      <div>{children}</div>
    </div>
  );
}
