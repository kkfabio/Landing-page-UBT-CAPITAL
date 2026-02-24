/* =================================
   HERO 
   ================================= */
<script>
        const menuToggle = document.getElementById('mobile-menu');
        const navMenu = document.querySelector('.nav-menu');
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    </script>
/* =================================
   MULTI FAMILY OFFICE
   ================================= */
<script>
    let currentY = 0;
    let targetY = 0;
    const ease = 0.1;

    const handleScroll = () => {
        if (window.innerWidth <= 1024) return;

        const section = document.getElementById('solucoes');
        const movingText = document.getElementById('moving-text');
        const rightContent = document.getElementById('right-content');
        
        const sectionRect = section.getBoundingClientRect();
        const textHeight = movingText.offsetHeight;
        const rightHeight = rightContent.offsetHeight;

        const totalTravelDistance = rightHeight - textHeight;
        let syncProgress = -sectionRect.top / (rightHeight - textHeight);
        syncProgress = Math.max(0, Math.min(1, syncProgress));

        targetY = syncProgress * totalTravelDistance;
    };

    const updateAnimation = () => {
        currentY += (targetY - currentY) * ease;
        const movingText = document.getElementById('moving-text');
        if (movingText) {
            movingText.style.transform = `translateY(${currentY.toFixed(2)}px)`;
        }
        requestAnimationFrame(updateAnimation);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    requestAnimationFrame(updateAnimation);

    document.getElementById('solucoes').addEventListener('mousemove', (e) => {
        const spotlight = document.getElementById('cursor-light');
        const rect = e.currentTarget.getBoundingClientRect();
        spotlight.style.background = `radial-gradient(circle at ${e.clientX - rect.left}px ${e.clientY - rect.top}px, rgba(0, 168, 132, 0.08) 0%, transparent 40%)`;
    });
</script>

