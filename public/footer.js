function Footer(props) {
  return (
    <>
      <footer>
        <PlusMinus section="footer" handle={props.handle} />
        <div className="section">Footer:{props.data.footer}</div>
        <Data data={props.data} />
        <div>
          Icons made by{" "}
          <a
            href="https://www.flaticon.com/authors/pixel-perfect"
            title="Pixel perfect"
          >
            Pixel perfect
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>
      </footer>
    </>
  );
}
