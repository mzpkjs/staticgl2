import __ from "../__"


function webglMakeCurrent(context) {
    __["__context__"] = context
    return true
}


export default webglMakeCurrent