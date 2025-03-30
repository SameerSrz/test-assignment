import React, { useState } from 'react';

const PageSelector = () => {
    const [checkedBoxes, setCheckedBoxes] = useState([]);
    const pages = ['Page 1', 'Page 2', 'Page 3', 'Page 4'];

    const handleCheckbox = (item, e) => {
        if (e) {
          e.stopPropagation();
        }
    
        if (checkedBoxes.includes(item)) {
          setCheckedBoxes(checkedBoxes.filter(box => box !== item));
        } else {
          setCheckedBoxes([...checkedBoxes, item]);
        }
      }
    
      const Checkbox = ({ isChecked, onClick, showHoverEffect = false }) => {
        const [isHovered, setIsHovered] = useState(false);
    
        return (
          <div 
            onClick={onClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`w-5 h-5 border-2 rounded transition-all duration-200 relative
              ${isChecked ? 'bg-blue-500 border-blue-500' : 'border-gray-300'} 
              ${isHovered ? 'shadow-[0_0_0_3px_rgba(59,130,246,0.1)]' : ''}`}
          >
            {(isChecked || (isHovered && showHoverEffect)) && (
              <div className="absolute inset-0 flex items-center justify-center leading-none">
                <span className={`text-[12px] ${isChecked ? 'text-white' : 'text-gray-300'}`}>✓</span>
              </div>
            )}
          </div>
        );
      }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white">
      <div className="bg-white rounded-lg p-4 w-[370px] h-[326px] border border-gray-200 shadow-[0_2px_8px_rgba(0,0,0,0.15)] flex flex-col">
        {/* Main checkbox */}
        <div 
          className="py-2 px-1 border-b border-gray-200 cursor-pointer flex justify-between items-center hover:bg-gray-50"
        >
          <span>All pages</span>
          <Checkbox 
            isChecked={checkedBoxes.includes('All pages')}     
            onClick={(e) => handleCheckbox('All pages', e)}
          />
        </div>

        {/* Show subpages when open */}
        <div className="flex-1">
            {pages.map((page) => (
              <div 
                key={page}
                className="py-2 px-1 cursor-pointer flex justify-between items-center"
                onClick={() => handleCheckbox(page)}
              >
                <span>{page}</span>
                <Checkbox 
                  isChecked={checkedBoxes.includes(page)}
                  onClick={(e) => handleCheckbox(page, e)}
                  showHoverEffect={true}
                />
              </div>
            ))}
          </div>

        {/* Done button */}
        <div className="pt-4 border-t border-gray-200">
          <button
            className="w-full bg-yellow-400 py-2 rounded hover:bg-[#FFD84D]"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default PageSelector;

