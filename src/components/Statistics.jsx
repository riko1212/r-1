export const Statistics = ({ title, stats }) => {
  const list = stats.map(el => (
    <li className="item" key={el.id}>
      <span className="label">{el.label}</span>
      <span className="percentage">{el.percentage}</span>
    </li>
  ));
  return (
    <section className="statistics">
      {title && <h2 className="title">Upload stats</h2>}
      <ul className="stat-list">{list}</ul>
    </section>
  );
};
