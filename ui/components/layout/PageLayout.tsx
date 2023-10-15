import { ComponentPropsWithoutRef } from "react";
import { Container } from "./Container";

export function PageLayout({ className, children }: ComponentPropsWithoutRef<"div">) {
  return (
    <div className={className}>
      <Container>
        <div className="flex flex-col items-center w-full justify-content">
          <div className="w-full md:w-2/3 lg:w-1/2 xl:w-2/5">{children}</div>
        </div>
      </Container>
    </div>
  );
}
