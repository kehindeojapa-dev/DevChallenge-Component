import * as styles from "./Input.module.scss";
import cn from "clsx";

type IconTypes = "login" | "local_grocery_store" | "logout" | "lock" | "phone";

interface InputProps {
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  startIcon?: IconTypes;
  endIcon?: IconTypes;
  value?: string;
  size?: "sm" | "md";
  fullwidth?: boolean;
  multiline?: boolean;
  row?: number;
}

const Input: React.FC<InputProps> = ({
  label = "Label",
  placeholder = "Placeholder",
  row = 1,
  ...props
}: InputProps) => {
  const classNames = cn(styles.Container, {
    [styles.InputError]: props.error,
    [styles.Disabled]: props.disabled,
    [styles.SmallSize]: props.size == "sm",
    // [styles.MediumSize]: props.size == "md",
    [styles.FullWidth]: props.fullwidth,
    [styles.multiline]: props.multiline,
  });

  let disabledInput = false;
  if (props.disabled == true) {
    disabledInput = true;
  }

  const IconClassNames = cn("material-icons", styles.Icon);

  const capitalizeText = (text: string | undefined) => {
    if (text !== undefined) {
      if (text.length > 0) {
        const x = text.charAt(0).toUpperCase() + text.slice(1);
        return x;
      } else {
        return text;
      }
    } else {
      return text;
    }
  };

  return (
    <div className={classNames}>
      {/* Label */}
      <label htmlFor="input">{label}</label>
      <div className={styles.InputContainer}>
        {/* Start Icon */}
        {props.startIcon ? (
          <span className={IconClassNames}>{props.startIcon}</span>
        ) : null}

        {/* TextArea || Input */}
        {props.multiline ? (
          <textarea
            id="input"
            value={capitalizeText(props.value)}
            disabled={disabledInput}
            placeholder={placeholder}
            rows={row}
          ></textarea>
        ) : (
          <input
            id="input"
            value={capitalizeText(props.value)}
            disabled={disabledInput}
            placeholder={placeholder}
          />
        )}

        {/* End Icon */}
        {props.endIcon ? (
          <span className={IconClassNames}>{props.endIcon}</span>
        ) : null}
      </div>

      {/* HelperText */}
      {props.helperText ? (
        <p className={styles.HelperText}>{props.helperText}</p>
      ) : null}
    </div>
  );
};

export default Input;
