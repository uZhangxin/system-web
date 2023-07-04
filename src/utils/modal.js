import {Message, MessageBox, Notification} from 'element-ui'
import {CONSTANT} from "./constant";

export function getModal(code, type, content) {
    // 返回状态码为200
    if (code === CONSTANT.HTTP_CODE.SUCCESS) {
        if (type === CONSTANT.MODAL_TYPE.MESSAGE) {
            return Message.success(content)
        }
        if (type === CONSTANT.MODAL_TYPE.MESSAGE_BOX) {
            return MessageBox.alert(content, "系统提示", {type: 'success'})
        }
        if (type === CONSTANT.MODAL_TYPE.NOTIFICATION) {
            return Notification.success(content)
        }
    }
    // 返回状态码为401
    if (code === CONSTANT.HTTP_CODE.UNAUTHORIZED) {
        if (type === CONSTANT.MODAL_TYPE.MESSAGE) {
            return Message.error(content)
        }
        if (type === CONSTANT.MODAL_TYPE.MESSAGE_BOX) {
            return MessageBox.alert(content, "系统提示", {type: 'error'})
        }
        if (type === CONSTANT.MODAL_TYPE.NOTIFICATION) {
            return Notification.error(content)
        }
    }
    // 返回状态码为500
    if (code === CONSTANT.HTTP_CODE.ERROR) {
        if (type === CONSTANT.CODE.MODAL_TYPE.MESSAGE) {
            return Message.warning(content)
        }
        if (type === CONSTANT.MODAL_TYPE.MESSAGE_BOX) {
            return MessageBox.alert(content, "系统提示", {type: 'warning'})
        }
        if (type === CONSTANT.MODAL_TYPE.NOTIFICATION) {
            return Notification.warning(content)
        }
    }
}