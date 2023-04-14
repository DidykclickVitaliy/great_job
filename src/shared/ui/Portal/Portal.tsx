import { FC } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  element?: HTMLElement
}

export const Portal: FC<PortalProps> = (props) => {
    const {
        children,
        element = document.querySelector("#root"),
    } = props;

    return (createPortal(children, element));
};

// export const Portal: FC<PortalProps> = (props) => {
//     const {
//         children,
//         element = document.body,
//     } = props;

//     const ref = useRef();
//     const [mounted, setMounted] = useState(false);

//     useEffect(() => {
//         ref.current = document.querySelector("#root") || undefined;
//         setMounted(true);
//     }, []);

//     return mounted && ref.current ? createPortal(children, ref.current) : null;
// };
