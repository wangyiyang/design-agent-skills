from pathlib import Path
import unittest


ROOT = Path(__file__).resolve().parents[1]
SKILL = ROOT / "skills" / "yy-design" / "SKILL.md"
README = ROOT / "README.md"


class YYDesignSkillContractTest(unittest.TestCase):
    def test_skill_has_discoverable_metadata_and_core_workflow(self):
        content = SKILL.read_text(encoding="utf-8")

        self.assertIn("name: yy-design", content)
        self.assertIn("description: Use when", content)
        self.assertIn("先读取现有上下文", content)
        self.assertIn("品牌资产协议", content)
        self.assertIn("Playwright", content)
        self.assertIn("references/", content)

    def test_root_readme_documents_the_subskill(self):
        content = README.read_text(encoding="utf-8")

        self.assertIn("yy-design", content)
        self.assertIn("skills/yy-design", content)
        self.assertIn("npx skills add wangyiyang/design-agent-skills --skill yy-design", content)


if __name__ == "__main__":
    unittest.main()
