import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Eye, EyeOff, Lock, User, Wifi, Shield, Users } from "lucide-react";

interface LoginFormProps {
  onLogin: (userType: string, username: string) => void;
}

export const LoginForm = ({ onLogin }: LoginFormProps) => {
  const [userType, setUserType] = useState<string>("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      let isValid = false;
      let actualUsername = "";

      if (userType === "admin") {
        if (username === "palestine71023" && password === "159200209Cc?") {
          isValid = true;
          actualUsername = "Admin";
        }
      } else if (userType === "multiple") {
        if (username === "aboselem892025" && password === "aymenseleemcardsINFO1125?") {
          isValid = true;
          actualUsername = "abo selem";
        } else if (username === "ahmedfathy892025" && password === "abofathyCARDSINFO@@?") {
          isValid = true;
          actualUsername = "ahmed fathy";
        } else if (username === "ahmedeldeeb982025" && password === "ahmedebrahim179355??SS") {
          isValid = true;
          actualUsername = "ahmed eldeeb";
        } else if (username === "saedzidan982025" && password === "saeedzidan159228Zz%%") {
          isValid = true;
          actualUsername = "saed zidan";
        }
      } else if (userType === "single") {
        // For single user, only mobile number is required (no password)
        if (username) {
          isValid = true;
          actualUsername = username;
        }
      }

      if (isValid) {
        toast({
          title: "تم تسجيل الدخول بنجاح",
          description: `مرحباً ${actualUsername}`,
        });
        onLogin(userType, actualUsername);
      } else {
        toast({
          title: "خطأ في تسجيل الدخول",
          description: "اسم المستخدم أو كلمة المرور غير صحيحة",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "خطأ",
        description: "حدث خطأ أثناء تسجيل الدخول",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-green-600"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-20 h-20 bg-white/10 rounded-full animate-bounce delay-1000"></div>
      <div className="absolute top-40 right-32 w-16 h-16 bg-white/10 rounded-full animate-bounce delay-2000"></div>
      <div className="absolute bottom-32 left-40 w-12 h-12 bg-white/10 rounded-full animate-bounce delay-3000"></div>
      <div className="absolute bottom-20 right-20 w-24 h-24 bg-white/10 rounded-full animate-bounce delay-500"></div>
      
      {/* Network Lines Animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-px h-32 bg-white animate-pulse delay-1000"></div>
        <div className="absolute top-1/3 right-1/3 w-24 h-px bg-white animate-pulse delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-px h-24 bg-white animate-pulse delay-3000"></div>
        <div className="absolute bottom-1/3 right-1/4 w-32 h-px bg-white animate-pulse delay-500"></div>
      </div>

      <Card className="w-full max-w-md shadow-2xl animate-scale-in backdrop-blur-lg bg-white/95 border-white/20">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-blue-600 to-green-600 rounded-full w-20 h-20 flex items-center justify-center shadow-lg">
            <Wifi className="h-10 w-10 text-white animate-pulse" />
          </div>
          <CardTitle className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600 mb-2">
            تسجيل الدخول
          </CardTitle>
          <p className="text-sm text-gray-600">نظام إدارة خطوط الإنترنت</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="userType">نوع المستخدم</Label>
              <Select value={userType} onValueChange={(value) => {
                setUserType(value);
                setPassword(""); // Clear password when switching user types
              }} required>
                <SelectTrigger className="bg-white/80 border-gray-300 focus:border-blue-500">
                  <SelectValue placeholder="اختر نوع المستخدم" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="admin">
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4" />
                      مدير النظام
                    </div>
                  </SelectItem>
                  <SelectItem value="multiple">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      مستخدم متعدد الخطوط
                    </div>
                  </SelectItem>
                  <SelectItem value="single">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      مستخدم عادي
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="username">
                {userType === "single" ? "رقم الموبايل" : "اسم المستخدم"}
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder={userType === "single" ? "أدخل رقم الموبايل" : "أدخل اسم المستخدم"}
                  className="pl-10 text-right bg-white/80 border-gray-300 focus:border-blue-500"
                  required
                />
              </div>
            </div>

            {userType !== "single" && (
              <div className="space-y-2">
                <Label htmlFor="password">كلمة المرور</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="أدخل كلمة المرور"
                    className="pl-10 pr-10 text-right bg-white/80 border-gray-300 focus:border-blue-500"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
            )}

            <Button 
              type="submit" 
              className="w-full hover-scale bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 shadow-lg transform transition-all duration-200 hover:scale-105"
              disabled={loading || !userType}
            >
              {loading ? "جاري تسجيل الدخول..." : "تسجيل الدخول"}
            </Button>
            
            {userType === "single" && (
              <p className="text-xs text-center text-gray-500 mt-2">
                المستخدم العادي يحتاج رقم الموبايل فقط
              </p>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
};