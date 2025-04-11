import { DropdownMenu } from "radix-ui";
import { useState } from "react";
import { LuChevronDown } from "react-icons/lu";
import { usePersonality } from "../contexts/usePersonality";
import type { Personalitys } from "../contexts/personalityContext";

const Personality = () => {
  const { personality, setPersonality } = usePersonality();
  const personalities: { label: string; value: Personalitys; description: string }[] = [
    {
      label: "SousChef Mode",
      value: "souschef",
      description: "แนะนำการทำอาหารแบบ\nมืออาชีพและเป็นทางการ",
    },
    {
      label: "Buddy Mode",
      value: "buddy",
      description: "แนะนำการทำอาหารแบบ\nเพื่อนสนิทสอนทำอาหาร",
    },
    {
      label: "Chef Ian Mode",
      value: "chef-ian",
      description: "แนะนำการทำอาหารแบบ\nเชฟเอียน Masterchef",
    },
  ];
  
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="min-w-48 px-4 py-2 rounded cursor-pointer flex justify-center items-center gap-1 hover:bg-gray-100">
          {personalities.find((p) => p.value === personality)?.label ??
            "Select Personality"}
          <LuChevronDown />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="start"
          sideOffset={5}
          className="bg-white shadow-md rounded-md p-2 w-48 border border-gray-200"
        >
          {personalities.map((mode) => (
            <DropdownMenu.Item
              key={mode.value}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onSelect={() => setPersonality(mode.value)}
            >
              <div className="flex flex-col">
                <span className="text-sm font-medium">{mode.label}</span>
                <span className="text-xs text-gray-500 whitespace-pre-line">
                  {mode.description}
                </span>
              </div>
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

const Language = () => {
  const [language, setLanguage] = useState("th");
  const languageLabel = language === "th" ? "ภาษาไทย" : "English";

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className="px-4 py-2 rounded cursor-pointer flex justify-center items-center gap-1 hover:bg-gray-100">
          {languageLabel}
          <LuChevronDown />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          sideOffset={5}
          className="bg-white shadow-md rounded-md p-2 w-48 border border-gray-200"
        >
          <DropdownMenu.Item
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onSelect={() => setLanguage("th")}
          >
            ภาษาไทย
          </DropdownMenu.Item>
          <DropdownMenu.Item
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onSelect={() => setLanguage("en")}
          >
            English
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

export const Header = () => {
  return (
    <div className="flex justify-between mt-[1rem] ">
      <div className="pl-[1.5rem]">
        <Personality />
      </div>
      <div className="pr-[1.5rem]">
        <Language />
      </div>
    </div>
  );
};
