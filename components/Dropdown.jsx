// import React, { useRef, useEffect } from "react";
// import PropTypes from "prop-types";

// /**
//  * Hook that alerts clicks outside of the passed ref
//  */
// function useOutsideAlerter(ref) {
//   useEffect(() => {
//     /**
//      * Alert if clicked on outside of element
//      */
//     function handleClickOutside(event) {
//       if (ref.current && !ref.current.contains(event.target)) {
//         alert("You clicked outside of me!");
//       }
//     }
//     // Bind the event listener
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       // Unbind the event listener on clean up
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [ref]);
// }

// /**
//  * Component that alerts if you click outside of it
//  */
// function OutsideAlerter(props) {
//   const wrapperRef = useRef(null);
//   useOutsideAlerter(wrapperRef);

//   return <div ref={wrapperRef}>{props.children}</div>;
// }

// OutsideAlerter.propTypes = {
//   children: PropTypes.element.isRequired
// };

// export default OutsideAlerter;












































// import React, { useEffect, useState, useRef } from "react";

// const Dropdown = ({ value, options, placeholder = "Select", onChange }) => {
//   const node = useRef();

//   const [open, setOpen] = useState(false);

//   const handleClick = e => {
//     if (node.current.contains(e.target)) {
//       // inside click
//       return;
//     }
//     // outside click
//     setOpen(false);
//   };

//   const handleChange = selectedValue => {
//     onChange(selectedValue);
//     setOpen(false);
//   };

//   useEffect(() => {
//     document.addEventListener("mousedown", handleClick);

//     return () => {
//       document.removeEventListener("mousedown", handleClick);
//     };
//   }, []);

//   return (
//     <div ref={node} className="dropdown">
//       <button className="dropdown-toggler" onClick={e => setOpen(!open)}>
//         {value || placeholder}
//       </button>
//       {open && (
//         <ul className="dropdown-menu">
//           {options.map(opt => (
//             <li className="dropdown-menu-item" onClick={e => handleChange(opt)}>
//               {opt}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Dropdown;
