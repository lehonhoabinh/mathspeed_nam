import { randomTracNghiem } from './trac-nghiem.js';

try {
  const data = randomTracNghiem(21);
  
  if (!data) throw new Error("Không có dữ liệu cho case 21");

  document.body.innerHTML = `
    <h2>${data.question}</h2>
    <div id="answers"></div>
    <div id="explain" style="margin-top: 20px;"></div>
  `;

  data.answerChoices.forEach((choice, index) => {
    const btn = document.createElement("button");
    btn.innerHTML = choice;
    btn.onclick = () => {
      const isCorrect = (choice === data.answerChoices[2]);
      btn.style.backgroundColor = isCorrect ? "lightgreen" : "salmon";
      document.getElementById("explain").innerHTML = data.explain;
    };
    document.getElementById("answers").appendChild(btn);
  });

} catch (err) {
  document.body.innerHTML = `<pre style="color: red;">❌ Lỗi: ${err.message}</pre>`;
  console.error(err);
}
