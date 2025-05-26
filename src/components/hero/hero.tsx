import { Button } from "@/components/ui/button";

const Hero78 = () => {
  return (
    <section className="dark relative flex h-svh max-h-[1400px] w-svw overflow-hidden bg-[url(/images/pawel-czerwinski-Z04h2XjQpWY-unsplash-2.jpg)] bg-cover bg-center bg-no-repeat font-sans after:absolute after:top-0 after:left-0 after:z-10 after:h-full after:w-full after:bg-black/20 after:content-[''] md:h-svh">
      <div className="relative z-30 m-auto flex max-w-[46.25rem] flex-col items-center justify-center gap-6 px-5">
        <h1 className="text-center font-serif text-4xl leading-tight text-foreground md:text-6xl xl:text-[4.4rem]">
          Online resume
        </h1>
        <p className="text-center text-base text-foreground">
          Hello, my name is Caillon Loïck, i'm a developper 
        </p>
        <Button className="h-fit w-fit rounded-full px-7 py-4 text-sm leading-tight font-medium">
          See linkedin profile
        </Button>
      </div>
      <div className="pointer-events-none absolute inset-0 z-20 h-full w-full bg-[url(/images/block/noise.png)] bg-repeat opacity-15" />
    </section>
  );
};

export { Hero78 };
