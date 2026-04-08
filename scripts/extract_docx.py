"""One-off: extract text from Marrakech Alchemy Website Content .docx"""
import zipfile
import xml.etree.ElementTree as ET
from pathlib import Path

W = "{http://schemas.openformats.org/wordprocessingml/2006/main}"
DOCX = Path(__file__).resolve().parent.parent / "public" / "Marrakech Alchemy Website Content .docx"


def para_text(p: ET.Element) -> str:
    chunks: list[str] = []
    for node in p.iter():
        if node.tag == W + "t" and node.text:
            chunks.append(node.text)
        if node.tag == W + "tab":
            chunks.append("\t")
    return "".join(chunks).strip()


def main() -> None:
    with zipfile.ZipFile(DOCX, "r") as z:
        root = ET.fromstring(z.read("word/document.xml"))

    paras: list[str] = []
    for p in root.iter(W + "p"):
        t = para_text(p)
        if t:
            paras.append(t)

    full = "\n\n".join(paras)
    out = Path(__file__).resolve().parent.parent / "public" / "website-content-extracted.txt"
    out.write_text(full, encoding="utf-8")
    print(full)
    print("\n---")
    print("Paragraphs:", len(paras), "Chars:", len(full))
    print("Also saved to:", out)


if __name__ == "__main__":
    main()
