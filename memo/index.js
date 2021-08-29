const clickBtn = document.getElementById("submitBtn");
const typeC = document.getElementById("commentInput");

typeC.addEventListener("keyup", uploadComment); // 'typeC' 이벤트 핸들러
clickBtn.addEventListener("click", uploadComment); // 'typeC' 이벤트 핸들러

function uploadComment(e) {
  // key를 눌렀다 떼면 함수 실행

  console.log(e);
  if (e.key === "Enter" || e.target.id === "submitBtn") {
    // 엔터 키를 누르면

    let comment = document.getElementById("commentPlus");
    let makeDiv = document.createElement("div"); // 하나의 댓글을 감싸는 div 태그 만들기
    let makeUser = document.createElement("span"); // 댓글을 단 사용자이름을 감싸는 span 태그
    let makeMsg = document.createElement("span"); // 댓글 내용을 감싸는 span 태그
    let makeBtn = document.createElement("BUTTON"); // 버튼 태그

    // 클래스명 부여하기
    makeDiv.className = "commentDiv"; // 'makeDiv'의 클래스명으로 "commentDiv" 할당
    makeUser.className = "commentUser"; // 'makeUser'의 클래스명, "commentUser" 할당
    makeMsg.className = "commentMsg"; // 'makeMsg'의 클래스명, "commentMsg" 할당
    makeBtn.className = "deleteBtn"; // 'makeBtn'의 클래스명, "deleteBtn" 할당

    makeMsg.innerHTML = typeC.value;
    makeUser.innerHTML = "Kookie_97"; // 사용자 이름을 하나로 정했다.
    makeBtn.innerHTML = "삭제"; // 삭제버튼

    comment.appendChild(makeDiv); // 댓글 전체를 감싸는 div 부모태그 안에 댓글 하나의 div 자식 태그 넣기
    makeDiv.appendChild(makeUser); // div 부모태그 안에 사용자이름의 span 자식태그 넣기
    makeDiv.appendChild(makeMsg); // div 부모태그 안에 댓글 내용의 span 자식태그 넣기
    makeDiv.appendChild(makeBtn); // div 부모태그 안에 삭제버튼 자식 태그 넣기

    // 엔터키를 누르면 하나의 댓글이 만들어짐

    // 삭제버튼을 누르면 발생하는 이벤트 만들기
    // uploadComment()  안에 삭제 버튼 이벤트를 만든 이유: 함수 안에서 만들어진 node에 접근하기 위해서
    makeBtn.addEventListener("click", (event) => {
      // 삭제버튼을 클릭하면 이벤트 발생

      const btn = event.target; // => 그 이벤트 발생의 'target'을 btn 변수에 선언
      console.log(btn); // 콘솔창을 띄우면 버튼 태그가 출력됨

      const deleteAll = btn.parentNode; // btn의 부모 노드 => commentDiv(버튼 태그를 감싸는 상위태그)

      comment.removeChild(deleteAll);
      // commentDiv를 감싸는 상위 태그 => comment,  comment의 자식 노드를 삭제한다 => deleteAll을(commentDiv태그를)

      // 결과적으로 삭제버튼을 클릭하면 그 삭제버튼을 포함하는 부모태그 commentDiv 자체가 지워져서
      // 원하는 댓글을 삭제할 수 있다.
    });
  }
}
