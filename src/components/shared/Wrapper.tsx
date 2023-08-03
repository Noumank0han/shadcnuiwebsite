const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="px-2 mobile:px-8 sm:px-16 max-w-[1240px] mx-auto mt-10 sm:mt-14 lg:mt-10">
      {children}
    </section>
  );
};

export default Wrapper;