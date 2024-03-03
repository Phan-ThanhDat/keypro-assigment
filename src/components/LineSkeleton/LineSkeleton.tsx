function SquareSkeleton(props: { className?: string }) {
  return <div className={`rounded-xl  ${props.className}`}></div>;
}

export function LineSkeleton() {
  return (
    <div className="h-12 rounded-xl p-2 flex gap-2 bg-background">
      <SquareSkeleton className="w-full bg-gray-200" />
      <SquareSkeleton className="w-8 flex-shrink-0 bg-gray-200" />
      <SquareSkeleton className="w-8 flex-shrink-0 bg-gray-200" />
    </div>
  );
}
