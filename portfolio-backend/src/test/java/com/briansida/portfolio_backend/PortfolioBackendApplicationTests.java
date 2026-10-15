package com.briansida.portfolio_backend;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

// Loads the Spring application context to verify that the application can start.
@SpringBootTest(properties = {
    "resend.api.key=test-api-key",
    "portfolio.email=test@example.com"
})
class PortfolioBackendApplicationTests {

    // JUnit runs this test to check that the Spring application context loads successfully.
    @Test
    void contextLoads() {
    }

}
