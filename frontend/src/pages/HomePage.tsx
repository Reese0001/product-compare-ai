type HomePageProps = {
  onStart: () => void;
};

const steps = ['填写对比需求', '添加 2-5 个产品', '生成对比表和 AI 推荐'];
const categories = ['手机数码', '电脑办公', '家电', '软件工具', '企业采购', '服务方案'];

export default function HomePage({ onStart }: HomePageProps) {
  return (
    <main className="page home-page">
      <section className="hero panel">
        <span className="eyebrow">AI Product Compare</span>
        <h1>把复杂商品信息整理成清晰的购买决策</h1>
        <p>
          手动输入、粘贴介绍或链接后，系统会整理核心参数、优缺点、适合人群，并生成对比表和推荐结论。
        </p>
        <button className="primary-button" onClick={onStart}>开始创建对比</button>
      </section>

      <section className="section-grid">
        <div className="panel">
          <h2>如何使用</h2>
          <ol className="step-list">
            {steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
        <div className="panel">
          <h2>支持类型</h2>
          <div className="tag-list large">
            {categories.map((category) => (
              <span key={category}>{category}</span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
