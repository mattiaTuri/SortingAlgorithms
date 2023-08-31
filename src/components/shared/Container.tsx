function Container({ children }: { children: JSX.Element }) {
  return (
    <div className="w-full container relative h-full mx-auto flex">
      {children}
    </div>
  );
}

export default Container;
