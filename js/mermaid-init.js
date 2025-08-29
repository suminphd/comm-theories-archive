window.addEventListener('DOMContentLoaded', function() {
  // Mermaid 초기화
  mermaid.initialize({
    startOnLoad: false,
    theme: 'default',
    themeVariables: {
      primaryColor: '#ff0000'
    }
  });

  // 모든 mermaid 다이어그램을 렌더링
  const mermaidElements = document.querySelectorAll('.mermaid');
  
  mermaidElements.forEach((element, index) => {
    const id = `mermaid-${index}`;
    element.setAttribute('id', id);
    
    try {
      mermaid.render(id, element.textContent, (svgCode) => {
        element.innerHTML = svgCode;
      });
    } catch (error) {
      console.error('Mermaid 렌더링 오류:', error);
      element.innerHTML = '<p>다이어그램을 렌더링할 수 없습니다.</p>';
    }
  });
});