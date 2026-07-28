from pathlib import Path
import unittest


ROOT = Path(__file__).resolve().parents[1]
SKILL = ROOT / "skills" / "yy-design" / "SKILL.md"
README = ROOT / "README.md"


class YYDesignSkillContractTest(unittest.TestCase):
    EXAMPLE_NAMES = (
        "hero-vi-v2",
        "c1-ios-prototype",
        "c2-slides-pptx",
        "c3-motion-design",
        "c5-infographic",
        "c6-expert-review",
        "w3-design-advisor",
    )

    def test_skill_has_discoverable_metadata_and_core_workflow(self):
        content = SKILL.read_text(encoding="utf-8")

        self.assertIn("name: yy-design", content)
        self.assertIn("description: Use when", content)
        self.assertIn("先读取现有上下文", content)
        self.assertIn("品牌资产协议", content)
        self.assertIn("Playwright", content)
        self.assertIn("references/", content)

    def test_yy_brand_uses_vi_v2_1(self):
        skill_content = SKILL.read_text(encoding="utf-8")
        palette_content = (
            ROOT / "skills" / "yy-design" / "assets" / "yy-color-palette.css"
        ).read_text(encoding="utf-8")
        renderer_content = (
            ROOT / "skills" / "yy-design" / "scripts" / "yy-wechat-render.mjs"
        ).read_text(encoding="utf-8")

        self.assertIn("references/yy-vi-v2.md", skill_content)
        self.assertIn("#00E676", skill_content)
        self.assertIn("--yy-terminal-green: #00E676", palette_content)
        self.assertNotIn("#C0392B", palette_content)
        self.assertNotIn("#B8860B", palette_content)
        self.assertIn("terminalGreen: '#00E676'", renderer_content)
        self.assertNotIn("vermillion", renderer_content)
        self.assertFalse(
            (ROOT / "skills" / "yy-design" / "assets" / "animations-ink.jsx").exists()
        )
        self.assertFalse(
            (
                ROOT
                / "skills"
                / "yy-design"
                / "assets"
                / "yixing-logo-master.svg"
            ).exists()
        )

    def test_root_readme_documents_the_subskill(self):
        content = README.read_text(encoding="utf-8")

        self.assertIn("yy-design", content)
        self.assertIn("skills/yy-design", content)
        self.assertIn("npx skills add wangyiyang/design-agent-skills --skill yy-design", content)

    def test_vi_v2_examples_are_complete_and_discoverable(self):
        examples_dir = ROOT / "skills" / "yy-design" / "assets" / "examples"
        readme = README.read_text(encoding="utf-8")

        for name in self.EXAMPLE_NAMES:
            self.assertTrue((examples_dir / f"{name}.gif").is_file(), name)
            self.assertTrue((examples_dir / f"{name}.mp4").is_file(), name)
            self.assertIn(f"skills/yy-design/assets/examples/{name}.gif", readme)

        for forbidden_term in ("水墨", "书法", "朱红", "哑金", "咖啡棕", "hero-ink-brand"):
            self.assertNotIn(forbidden_term, readme)


if __name__ == "__main__":
    unittest.main()
