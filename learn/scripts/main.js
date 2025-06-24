
function displayUnits() {
    // Giả sử bạn đã có code hiển thị các đơn vị học phần ở đây
}

function addEvent() {
    // Giả sử bạn đã có xử lý sự kiện ở đây
}

function saveScrollPosition() {
    // Ghi lại vị trí cuộn nếu cần
}

function addIdentity() {
    // Hàm xử lý định danh nếu có
}

// ✅ Hàm lưu trạng thái bài học
function saveExerciseState(exerciseId, status) {
    let states = JSON.parse(localStorage.getItem("exerciseStates")) || {};
    states[exerciseId] = status;
    localStorage.setItem("exerciseStates", JSON.stringify(states));
}

// ✅ Hàm tải lại trạng thái khi load trang
function loadExerciseStates() {
    let states = JSON.parse(localStorage.getItem("exerciseStates")) || {};
    for (const [id, status] of Object.entries(states)) {
        const el = document.getElementById(id);
        if (el) {
            el.classList.add(status); // Thêm class tương ứng: 'done', 'correct', 'wrong'
        }
    }
}

// ✅ Hàm đánh dấu đã hoàn thành
function markExerciseDone(exerciseId) {
    saveExerciseState(exerciseId, 'done');
}

// ✅ Hàm mở tất cả các đơn vị học phần
function unlockAllUnits() {
    let units = JSON.parse(localStorage.getItem('units')) || [];
    for (let unit of units) {
        for (let level of unit.levels) {
            level.state = 'unlock';
        }
    }
    localStorage.setItem('units', JSON.stringify(units));
}

// ✅ Gọi khi trang được tải
window.onload = function () {
    unlockAllUnits();
    displayUnits();
    loadExerciseStates();
    addEvent();
    saveScrollPosition();
    addIdentity();
};
