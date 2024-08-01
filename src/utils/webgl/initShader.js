function loadShader(gl, type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    return shader;
}

function initShader(gl, vsSource, fsSource) {
    const program = gl.createProgram();
    const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
    const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);

    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.useProgram(program);
    gl.program = program;
    return true;
}

// 点击画布时，获取canvas画布上的位置
function clickAndGetPosition(dom, callback) {
    dom.addEventListener('click', ({ clientX, clientY }) => {
        const { left, top, width, height } = dom.getBoundingClientRect();
        const [cssX, cssY] = [clientX - left, clientY - top];
        
         // 解决坐标原点的差异
        const [halfWidth, halfHeight] = [width / 2, height / 2];
        const [xBaseCenter, yBaseCenter] = [cssX - halfWidth, cssY - halfHeight];
        // 解决y方向的差异
        const yBaseCenterTop = -yBaseCenter;
        // 解决坐标基底的差异
        const [x, y] = [xBaseCenter/halfWidth, yBaseCenterTop / halfHeight];
        callback(x, y);
    })
}