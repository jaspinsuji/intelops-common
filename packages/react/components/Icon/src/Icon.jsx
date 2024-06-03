import React, {useState,useEffect} from "react";
import PropTypes from "prop-types";
import * as Iconset from "@heroicons/react/solid";

const Icons = ({icon, type, className, variant , color }) => {
  const [iconVariant, setIconVariant] = useState('w-8 h-8');
  const IconComponent = Iconset[icon];
  useEffect(() => {
    switch (variant) {
      case 'extraSmall':
        setIconVariant('w-4 h-4');
          break;
        case 'small':
          setIconVariant('w-6 h-6');
            break;
        case 'default':
          setIconVariant('w-9 h-9');
            break;
        case 'large':
          setIconVariant('w-12 h-12');
            break;
            case 'extraLarge':
              setIconVariant('w-16 h-16');
                break;
        default:
          setIconVariant("w-8 h-8");
    }
}, []);
  return (
    <>{
      type ? (
        <button type="button" class="inline-block px-2 py-2 mr-3 font-bold text-center text-white uppercase align-middle transition-all rounded-lg cursor-pointer bg-gradient-to-tl from-purple-700 to-pink-500 leading-pro text-xs ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 hover:scale-102 active:opacity-85 hover:shadow-soft-xs">
      <svg class={`${className} ${iconVariant}`} color={color}>
        <IconComponent />
      </svg>
</button>
      ):(
        <svg class={`${className} ${iconVariant}`} color={color}>
        <IconComponent />
      </svg>
      )
    }
    </>
  );
};

Icons.propTypes = {
   /**
   * Specify a custom `icon` for the `<Icons>`
   */
   icon: PropTypes.node,
  /**
   * Specify a custom `className` for the `<Icons>`
   */
  className: PropTypes.string,

  /**
   * Specify a `<Icons>` variant
   */
  variant: PropTypes.node,

  /**
   * Specify a `color` for the `<Icons>`
   */
  color: PropTypes.string,

  /**
   * Specify a `type` for the `<Icons>`
   */
  type: PropTypes.string,
};

export default Icons;
