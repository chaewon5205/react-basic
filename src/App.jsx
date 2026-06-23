import "./App.css";

//Myheader 컴포넌트
function Myheader() {
  return (
    <header>
      <h1 className="logo">프론트엔드 개발자</h1>
      <p>기본언어인 html, css, javascript부터 학습합니다.</p>
    </header>
  );
}
//Nav 컴포넌트
function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <a href="">UI/UX 개발</a>
        </li>
        <li>
          <a href="">재사용이 가능한 UI 개발</a>
        </li>
        <li>
          <a href="">애니메이션 구현</a>
        </li>
      </ul>
    </nav>
  );
}
function MyArticle({ title, desc }) {
  return (
    <section>
      <article>
        <h2>{title}</h2>
        <p>{desc}</p>
      </article>
    </section>
  );
}
function App() {
  return (
    <>
      <Myheader />
      <Nav />
      <MyArticle title="UI/UX 개발" desc="사용자 경험을 고려한 독립적이고 반응성 높은 화면 구현" />
    </>
  );
}

export default App;
