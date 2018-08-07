// Code SimplerComponent Here

const SimplerComponent = (props) =>
  <div>I am just happy.</div>
  <button onClick={props.handleClick}
  <input
    className="field field-light"
    onChange={props.onChange}
    limit={props.limit || defaultLimit}
  />;
