interface PageHeaderProps {
  title: string;
  description: string;
  align?: "left" | "center";
}

export default function PageHeader({ title, description, align = "left" }: PageHeaderProps) {
  return (
    <>
      <div
        className={`flex flex-col mt-5 gap-4 ${
          align === "center"
            ? "items-center text-center"
            : "items-start md:flex-row md:justify-between md:gap-8"
        }`}
      >
        <div className="flex-1 space-y-4">
          <h1 className="inline-block font-heading text-4xl tracking-tight lg:text-5xl capitalize ">
            {title}
          </h1>
          <p className="text-lg text-muted-foreground">{description}</p>
        </div>
      </div>
      <hr className="my-6" />
    </>
  );
}
