import type { ComparisonProject } from '../types/product';

type CreateComparisonPageProps = {
  project: ComparisonProject;
  onProjectChange: (project: ComparisonProject) => void;
  onNext: () => void;
};

export default function CreateComparisonPage({ project, onProjectChange, onNext }: CreateComparisonPageProps) {
  const updateField = (field: keyof ComparisonProject, value: string) => {
    onProjectChange({ ...project, [field]: value });
  };

  return (
    <main className="page narrow-page">
      <section className="panel page-header">
        <span className="eyebrow">第 1 步</span>
        <h1>创建对比项目</h1>
        <p>这些信息会影响后续对比维度和 AI 推荐方向。</p>
      </section>

      <section className="panel form-panel">
        <label>
          对比标题
          <input value={project.title} onChange={(event) => updateField('title', event.target.value)} />
        </label>
        <label>
          产品类型
          <input value={project.productType} onChange={(event) => updateField('productType', event.target.value)} />
        </label>
        <label>
          预算范围
          <input value={project.budget} onChange={(event) => updateField('budget', event.target.value)} />
        </label>
        <label>
          使用场景
          <textarea value={project.scenario} onChange={(event) => updateField('scenario', event.target.value)} rows={4} />
        </label>
        <label>
          关注重点
          <textarea value={project.priorities} onChange={(event) => updateField('priorities', event.target.value)} rows={4} />
        </label>
        <button className="primary-button" onClick={onNext}>下一步：添加产品</button>
      </section>
    </main>
  );
}
