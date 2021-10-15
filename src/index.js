import "./styles.css";

const onClickAdd = () => {
  // inputの値を変数に代入し、その後初期化する
  const inputText = document.getElementById("add_text").value;
  document.getElementById("add_text").value = "";

  // liタグ生成
  alert(inputText);
  const li = document.createElement("li");
  li.className = "list_row";

  // divタグ生成
  const div = document.createElement("div");
  div.className = "todo";
  div.innerText = "・" + inputText;

  // 未完了リストに追加
  document.getElementById("incomplete_list").appendChild(li);

  // ボタン追加
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 未完了リストから対象要素を削除
    deleteFromIncompleteList(completeButton.parentNode);

    // 完了リストに追加する要素
    const completeTarget = completeButton.parentNode;
    const text = completeTarget.firstElementChild.innerText;

    // completeTarget以下を初期化
    completeTarget.textContent = null;

    // liタグを生成
    const li = document.createElement("li");
    li.className = "list_row";

    // divタグを生成し、liタグ以下に移動
    const div = document.createElement("div");
    div.innerText = text;
    div.className = "todo";
    li.appendChild(div);

    // 戻すボタンを生成し、liタグ以下に移動
    const returnButton = document.createElement("button");
    returnButton.innerText = "戻す";
    returnButton.addEventListener("click", () => {
      // 未完了リストに戻す要素
      const incompleteTarget = returnButton.parentNode;
      const text = incompleteTarget.firstElementChild.innerText;

      // incompleteTarget以下を初期化
      incompleteTarget.textContent = null;

      // liタグを生成
      const li = document.createElement("li");
      li.className = "list_row";

      // divタグを生成し、liタグ以下に移動
      const div = document.createElement("div");
      div.innerText = text;
      div.className = "todo";
      li.appendChild(div);

      // 未完了リストに生成したliタグを移動
      document.getElementById("incomplete_list").appendChild(li);
    });
    li.appendChild(returnButton);

    // 完了タグに生成したliタグを移動
    document.getElementById("complete_list").appendChild(li);
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親 liタグを削除
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  // liタグの子要素に各要素を設定
  li.appendChild(div);
  li.appendChild(completeButton);
  li.appendChild(deleteButton);
};

// 未完了リストから指定の要素を削除する関数
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete_list").removeChild(target);
};

document
  .getElementById("add_button")
  .addEventListener("click", () => onClickAdd());
