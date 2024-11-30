nums =  [-1,0,1,2,-1,-4]

i = 0 
j = i+1 
k = len(nums) -1 
toreturn = []

while(i  <  k) : 
    ans = nums[i] + nums[j] + nums[k] 
    print(ans)

    if(ans == 0) : 
        toreturn.append([nums[i] , nums[j] , nums[k]])
    i +=1
    k -=1   
print(toreturn)