package runner;


import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

/*
 * single scenario: tags="@Mobiles"
 * multiple scenario: tags="@Mobiles or @Fashion"
 * skip any one scenario: tags="not @BestSeller"
 * ignore multiple scenario: tags="not @ignore"
 */
@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources/FeatureFiles/Amazon.feature",
					glue="stepdef",
					tags="@All")

public class AmazonRunner {

}
