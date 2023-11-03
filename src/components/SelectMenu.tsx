/* eslint-disable @typescript-eslint/no-explicit-any */

import chevronDown from "../assets/images/icon-chevron-down.svg";
import { useEffect, useState } from "react";
import { FormikProps } from "formik";
import platforms from "../utils/platforms";

type selectMenuProps = {
  form?: FormikProps<any>;
  linkId: number;
};

const SelectMenu = ({ form, linkId }: selectMenuProps) => {
  const [selectedPlatform, setSelectedPlatform] = useState(platforms[0]);
  const [showMenu, setShowMenu] = useState(false);

  const handleSelectPlatform = (platform: (typeof platforms)[0]) => {
    setSelectedPlatform(platform);
  };

  useEffect(() => {
    if (form) {
      form.setFieldValue("platformId", selectedPlatform?.platformId);
      form.setFieldValue("icon", selectedPlatform?.icon);
      form.setFieldValue("name", selectedPlatform?.name);
    }
  }, [selectedPlatform]);

  useEffect(() => {
    const menu = document.getElementById("menu" + linkId);
    showMenu ? menu?.scrollTo(0, 0) : null;
  }, [showMenu, linkId]);

  useEffect(() => {
    const dropDownMenu = document.getElementById(`dropDownMenu${linkId}`);
    const handleClickOutside = (event: MouseEvent) => {
      if (dropDownMenu && !dropDownMenu.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });

  return (
    <div>
      <label className="text-xs mb-1">Platform</label>
      <div id={`dropDownMenu${linkId}`} className="relative">
        <div
          onClick={() => setShowMenu((prev) => !prev)}
          className={
            "mb-2 hover:border-purple rounded-lg flex items-center justify-between transition py-3 px-4 cursor-pointer border border-borders bg-white " +
            (showMenu && "border-purple shadow-activeSelection")
          }
        >
          <div className="flex items-center gap-3">
            <img
              src={selectedPlatform?.icon}
              alt={selectedPlatform?.name}
              className="filter grayscale contrast-0"
            />
            <span>{selectedPlatform?.name}</span>
          </div>
          <img
            className={`${showMenu && "transition rotate-180"}`}
            src={chevronDown}
            alt="chevronDown"
          />
        </div>

        <div
          id={"menu" + linkId}
          className={
            "z-10 overflow-y-scroll absolute w-full shadow-black px-4 rounded-lg bg-white transition-all " +
            (showMenu ? "h-80 py-3" : "h-0 py-0")
          }
        >
          {platforms.map((platform, i) => (
            <button
              type="button"
              key={platform?.platformId}
              className={
                "w-full flex items-center gap-3 py-3 cursor-pointer hover:bg-lightPurple/25 " +
                (i !== platforms?.length - 1 && "border-b border-b-borders ") +
                (platform?.platformId === selectedPlatform?.platformId &&
                  "text-purple")
              }
              onClick={() => {
                handleSelectPlatform(platform);
                setShowMenu(false);
              }}
            >
              <img
                className={
                  platform?.platformId === selectedPlatform?.platformId
                    ? ""
                    : "filter grayscale contrast-0"
                }
                src={platform?.icon}
                alt={platform?.name}
              />
              <span>{platform?.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SelectMenu;
