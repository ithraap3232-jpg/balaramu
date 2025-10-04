import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Home, Receipt } from "lucide-react";

const ThankYou = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const orderData = location.state?.orderData;
  const total = location.state?.total;

  useEffect(() => {
    if (!orderData) {
      navigate("/");
    }
  }, [orderData, navigate]);

  const orderNumber = Math.floor(Math.random() * 900000) + 100000;
  const estimatedTime = "30-45 minutes";

  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <CheckCircle2 className="h-20 w-20 text-green-600 animate-scale-in" />
          </div>
          <CardTitle className="text-3xl font-bold mb-2">Thank You for Your Order!</CardTitle>
          <p className="text-muted-foreground">
            Your order has been successfully placed and is being prepared
          </p>
        </CardHeader>

        <CardContent className="space-y-6">
          <div className="bg-secondary/50 rounded-lg p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Receipt className="h-5 w-5 text-primary" />
                <span className="font-medium">Order Number</span>
              </div>
              <span className="text-xl font-bold text-primary">#{orderNumber}</span>
            </div>

            <div className="grid md:grid-cols-2 gap-4 pt-4 border-t border-border">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Estimated Delivery</p>
                <p className="font-semibold">{estimatedTime}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Total Amount</p>
                <p className="font-semibold text-primary">${total?.toFixed(2)}</p>
              </div>
            </div>
          </div>

          {orderData && (
            <div className="space-y-3">
              <h3 className="font-semibold">Delivery Details</h3>
              <div className="bg-secondary/30 rounded-lg p-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Name:</span>
                  <span className="font-medium">{orderData.username}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Email:</span>
                  <span className="font-medium">{orderData.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Phone:</span>
                  <span className="font-medium">{orderData.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Address:</span>
                  <span className="font-medium text-right">{orderData.address}, {orderData.city} {orderData.zipCode}</span>
                </div>
              </div>
            </div>
          )}

          <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-lg p-4">
            <p className="text-sm text-amber-800 dark:text-amber-200">
              <strong>Track Your Order:</strong> We'll send you real-time updates via email and SMS. You can also track your order status in the confirmation email.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button
              onClick={() => navigate("/")}
              variant="hero"
              size="lg"
              className="flex-1"
            >
              <Home className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
            <Button
              onClick={() => navigate("/")}
              variant="outline"
              size="lg"
              className="flex-1"
            >
              Order Again
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ThankYou;
