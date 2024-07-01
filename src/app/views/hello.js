function Hello({data}) {
    return (
        <div className="hello">{data}</div>
    );
  }

  function get_data(i) {
    return i + 1;
  }
  function Item({ name, isPacked }) {
    if (isPacked) {
      return <li className="item">Null</li>;
    }
    return <li className="item">{name}</li>;
  }
  function List() {
    let list = [
      'one', 'two', 'three', 'four', 'five', 'six'
    ];
    let temp = list.map(item => <li key={item}>{item}</li>);
    return <ul>{temp[0].content}</ul>;
  }