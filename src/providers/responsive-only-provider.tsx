"use client";
import useScreenSize from "@/hooks/use-screen-size";
import useIsMounted from "@/hooks/use-is-mounted";

const ResponsiveOnlyProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const screenSize = useScreenSize();
  const isResponsive = screenSize.width >= 1400;
  const isMounted = useIsMounted();

  return (
    <>
      {!isResponsive && isMounted && (
        <div className="overlay flex items-center justify-center">
          <div className=" flex h-full w-full items-center justify-center rounded-3xl bg-white p-4 md:h-auto md:w-[500px]">
            <h1 className="text-center text-2xl font-bold md:text-4xl">
              Sorry this page is not responsive yet go back to {">"} 1400px
            </h1>
          </div>
        </div>
      )}
      {children}
    </>
  );
};

export default ResponsiveOnlyProvider;
