import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import { useRouteError } from "react-router-dom";

type RouteError = {
  status?: number;
  statusText?: string;
  message?: string;
};

export default function ErrorPage() {
  const error = useRouteError();
  const routeError = error as RouteError;

  return (
    <div id="error-page" className="text-center">
      <Title level={2} className="mb-4">
        Oops!
      </Title>
      <Paragraph className="mb-4">
        Sorry, an unexpected error has occurred.
      </Paragraph>
      <Paragraph className="mb-4">
        <i>
          {routeError?.statusText || routeError?.message || "Unknown error"}
        </i>
      </Paragraph>
    </div>
  );
}
