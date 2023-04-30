import * as styles from "./Button.module.scss";
import cn from "clsx";

type IconTypes =
  | "login"
  | "local_grocery_store"
  | "logout"
  | "facebook"
  | "face";
interface ButtonProps {
  /**
   * Decide button look
   */
  variant?: "outline" | "text" | "solid";

  size?: "sm" | "md" | "lg" | "xl";

  color?: "default" | "primary" | "secondary" | "danger";

  disabled?: boolean;

  disableShadow?: boolean;

  startIcon?: IconTypes;

  endIcon?: IconTypes;

  /**
   * Button Text Content
   */
  text?: string;

  /**
   * Button Function on Click
   */
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  size = "sm",
  color = "default",
  text = "Default",
  ...props
}: ButtonProps) => {
  const classNames = cn(styles.Button, {
    [styles.DisableShadow]: props.disableShadow,
    [styles.VariantOutline]: props.variant == "outline",
    [styles.VariantText]: props.variant == "text",
    [styles.SizeSmall]: size == "sm",
    [styles.SizeMedium]: size == "md",
    [styles.SizeLarge]: size == "lg",
    [styles.SizeExtraLarge]: size == "xl",
    [styles.Button]: color == "default",
    [styles.ColorPrimary]: color == "primary",
    [styles.ColorSecondary]: color == "secondary",
    [styles.ColorDanger]: color == "danger",
    [styles.Disabled]: props.disabled,
    [styles.VariantTextDisabled]: props.disabled && props.variant == "text",
  });
  const IconClassNames = cn("material-icons", styles.Icon);
  // console.log(props);
  return (
    <button type="button" className={classNames}>
      {props.startIcon ? (
        <span className={IconClassNames}>{props.startIcon}</span>
      ) : null}
      {/* {children} */}
      <span>{text}</span>
      {props.endIcon ? (
        <span className={IconClassNames}>{props.endIcon}</span>
      ) : null}
    </button>
  );
};

export default Button;
