export interface Item {
    title: string,
    activeIcon: string,
    inActiveIcon: string,
    subDropdown: any,
    id: number,
    state: boolean,
}

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

export interface LinkProps {
    path: string,
    name: string,
}

export interface PostData {
    userId?: number,
    id?: number,
    title: string,
    body: string,
}
