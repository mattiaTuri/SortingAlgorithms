function Container({ children }: { children: JSX.Element }) {
  return (
    <div className="w-full container relative h-full mx-auto flex p-4">
      {children}
    </div>
  );
}

export default Container;
