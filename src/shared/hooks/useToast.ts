import { App } from "antd"

export const useToast = () => {
    const { message } = App.useApp();

    return {
        success: (text: string) => message.success(text),
        error: (text: string) => message.error(text),
        info: (text: string) => message.info(text),
        warning: (text: string) => message.warning(text),
    }
}