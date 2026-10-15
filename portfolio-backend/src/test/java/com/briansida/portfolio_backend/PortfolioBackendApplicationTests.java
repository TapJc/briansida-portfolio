package com.briansida.portfolio_backend;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest(properties = {
    "resend.api.key=test-api-key",
    "portfolio.email=test@example.com"
})
class PortfolioBackendApplicationTests {

    @Test
    void contextLoads() {
    }

}
