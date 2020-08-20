import loadable from "@loadable/component";
import { Box } from "@material-ui/core";

const LoadDeshboardComponent = loadable(
  (props) =>
    import(`./${props.component}`).catch(() => {
      return () => {
        if (props.error) {
          return props.error;
        }
        return false;
      };
    }),
  {
    cacheKey: (props) => props.component,
    fallback: <div>Loading...</div>,
  }
);
export default LoadDeshboardComponent;
