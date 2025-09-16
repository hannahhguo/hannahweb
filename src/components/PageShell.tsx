export default function PageShell({ children, right }: { children: React.ReactNode; right?: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-screen-xl lg:grid lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-12 px-4 lg:pl-8 lg:pr-0">
      <article className="py-6">{children}</article>
      {right ? (
        <aside className="hidden lg:block sticky top-24 self-start py-6 justify-self-end w-[320px]">
          {right}
        </aside>
      ) : (
        <aside className="hidden lg:block" />
      )}
    </div>
  );
}
