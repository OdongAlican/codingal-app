export  interface Item {
    title: string,
    activeIcon: string,
    inActiveIcon: string,
    subDropdown: any,
    id: number,
    state: boolean,
};

export interface ButtonProps {
    name: string,
    clickButton: () => void,
    bgColor: string,
    textColor: string,
}

export interface TextAreaProps {
    value: string,
    name: string,
    changedValue: (value: string) => void,
}