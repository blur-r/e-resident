function Reviews() {
    return (
        <div className="reviews">
            <h1>Reviews from Satisfied Clients</h1>
            <div className="reviews-content">
                <p>We take pride in delivering top-quality service and exceptional results. Here’s what some of our satisfied clients have shared about their experience with us.</p>
                <div class="testimonial-card">
                    <div class="profile-image">
                        <img src="/images/bgImg.png" alt="" />
                    </div>
                    <div class="text-content">
                        <p class="testimonial-text">I love the apartment I got from this platform, they're the best in business..</p>
                        <p class="username">Cathy_Blurr</p>
                    </div>
                    <div class="pagination-dots">
                        <span class="dot"></span>
                        <span class="dot active"></span>
                        <span class="dot"></span>
                    </div>
                    <div class="arrow left">&larr;</div>
                    <div class="arrow right">&rarr;</div>
                </div>
            </div>

        </div>
    )
}

export default Reviews