export function render(element, content) {
    const elementId = document.getElementById(element)
    // nếu có giá trị thì hiển thị
    if (!elementId) return; {
        elementId.innerHTML = content;
    }
}